export const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT ? +process.env.PORT : 4399,
  group: '16740622',
  author: 'hblongqiang <hblongqiang@gmail.com>',
  github: 'https://github.com/jianghuhao/60s',
  encodingParamName: process.env.ENCODING_PARAM_NAME || 'encoding',
}

export const COMMON_MSG = `所有数据均来自官方，确保稳定与实时，用户群: ${config.group}，开源地址: ${config.github}`
