'use strict';

const sharp = require('sharp');
const { ApplicationError } = require('@strapi/utils/lib/errors');

const CONFIGURED_WIDTH = 600;
const CONFIGURED_HEIGHT = 600;

const getMetadata = (file) =>
  new Promise((resolve, reject) => {
    const pipeline = sharp();
    pipeline.metadata().then(resolve).catch(reject);
    file.getStream().pipe(pipeline);
  });

const getDimensions = async (file) => {
  const { width = null, height = null } = await getMetadata(file);
  console.log(await getMetadata(file))
  if (height > CONFIGURED_HEIGHT || width > CONFIGURED_WIDTH) {
    throw new ApplicationError(`Aspect Ratio unsupported. Should be less than ${CONFIGURED_HEIGHT}*${CONFIGURED_WIDTH}. Provided ${height}*${width}`);
  }
  return { width, height };
};

module.exports = {
  getDimensions,
};
