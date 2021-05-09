import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack from 'webpack';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.tsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          [
            'module-resolver',
            {
              alias: {
                '@': './src',
              },
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
          ],
        ],
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
];

const _module: webpack.ModuleOptions = {
  rules,
};

const config: webpack.Configuration = {
  entry: {
    content_scripts: path.join(__dirname, 'src', 'content_scripts', 'index.ts'),
    background: path.join(__dirname, 'src', 'background', 'index.ts'),
    popup: path.join(__dirname, 'src', 'popup', 'index.tsx'),
    options: path.join(__dirname, 'src', 'options', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', process.env.SERVICE || ''),
  },
  module: _module,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.EnvironmentPlugin({ HOST: '', SERVICE: 'traQ' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.' }] }),
    // new BundleAnalyzerPlugin(),
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};

export default config;
