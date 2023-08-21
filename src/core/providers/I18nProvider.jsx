import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";

import ar from "@/core/locales/ar.json";
import en from "@/core/locales/en.json";

const messages = { ar, en };

export function I18nProvider({ children }) {
  const locale = useSelector(selectors.appLanguage);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
