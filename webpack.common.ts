import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack from 'webpack';

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

const module: webpack.ModuleOptions = {
  rules,
};

const config: webpack.Configuration = {
  target: 'node',
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
  module,
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
  ],
};

export default config;
