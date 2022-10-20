import {configureLocalization} from '@lit/localize';
import {sourceLocale, targetLocales} from './locale-codes';

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`./locales/${locale}.js`),
});

export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('locale') || sourceLocale;
  await setLocale(locale);
};
