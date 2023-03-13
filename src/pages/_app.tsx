/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CacheProvider } from '@emotion/react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import wrapper from '@/states/store';
import createEmotionCache from '@/styles/createEmotionCache';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import type { EmotionCache } from '@emotion/cache';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & { emotionCache?: EmotionCache };

const MyApp: React.FC<MyAppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <LazyMotion features={domAnimation}>
            <GlobalStyle />
            <Component {...pageProps} />
          </LazyMotion>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
