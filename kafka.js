const { Kafka } = require('kafkajs');
const ffmpeg = require('fluent-ffmpeg');
const stream = require('stream');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['awakeai.tpddns.cn:9092']
});

const consumer = kafka.consumer({ groupId: 'dashboard-client' });

// 创建一个 PassThrough 流来作为 FFmpeg 的输入
const inputStream = new stream.PassThrough();

// 设置 FFmpeg 命令
const ffmpegCommand = ffmpeg()
  .input(inputStream)
  .inputFormat('image2pipe')
  .inputOptions(['-framerate 30']) // 假设输入帧率为30fps，根据实际情况调整
  .videoCodec('libx264')
  .outputOptions([
    '-pix_fmt yuv420p',
    '-preset ultrafast',
    '-f rawvideo'
  ])
  .output('output.mp4'); // 输出文件名

// 启动 FFmpeg 进程
ffmpegCommand
  .on('start', (commandLine) => {
    console.log('FFmpeg process started:', commandLine);
  })
  .on('error', (err, stdout, stderr) => {
    console.error('FFmpeg error:', err.message);
    console.error('FFmpeg stderr:', stderr);
  })
  .on('end', () => {
    console.log('FFmpeg processing finished');
  })
  .run();

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'p_stage_gui', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Received message', {
        topic,
        partition,
        offset: message.offset,
      });
      
      // 将接收到的 JPEG 数据写入输入流
      inputStream.write(message.value);
    },
  });
}

run().catch(console.error);

// 优雅退出
process.on('SIGTERM', async () => {
  console.log('Received SIGTERM. Closing consumer and FFmpeg...');
  await consumer.disconnect();
  inputStream.end();
  process.exit(0);
});