import { resolve } from "path";

import ImageminPlugin from "imagemin-webpack";

import imageminGifsicle from "imagemin-gifsicle";
import imageminJpegtran from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

export default pluginOptions => ({
  webpack(config, { defaultLoaders, stage }) {
    console.log("stage is:", stage);
    config.resolve.alias = {
      ...config.resolve.alias,
      "@data": resolve(__dirname, "./src/data"),
      "@components": resolve(__dirname, "./src/components")
    };
    config.resolve.extensions.unshift(".md", ".mdx");
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.mdx?$/,
            use: [
              ...defaultLoaders.jsLoader.use,
              {
                loader: "mdx-loader"
              }
            ]
          },
          {
            test: /\.(gif|svg)$/i,
            use: [
              {
                loader: "file-loader",
                options: {
                  emitFile: true, // Don't forget emit images
                  name: "aesir_[hash].[ext]"
                }
              }
            ]
          },
          {
            test: /\.(jpe?g|png)$/i,
            use: [
              {
                loader: "responsive-loader",
                options: {
                  name: "aesir_[hash]_[width].[ext]",
                  adapter: require("responsive-loader/sharp"),
                  sizes: [200, 300, 600, 1200, 2000],
                  placeholder: true,
                  placeholderSize: 40
                }
              }
            ]
          },
          ...config.module.rules[0].oneOf
        ]
      }
    ];

    config.plugins.push(
      new ImageminPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        loader: false,
        imageminOptions: {
          // Lossless optimization with custom option
          // Feel free to experement with options for better result for you
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminJpegtran({
              progressive: true
            }),
            imageminOptipng({
              optimizationLevel: 5
            }),
            imageminSvgo({
              removeViewBox: true
            })
          ]
        }
      })
    );

    return config;
  }
});
