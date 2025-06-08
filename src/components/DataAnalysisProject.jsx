import React from 'react';
import { useTranslation } from 'react-i18next';

import ResidualFittedImg from '../assets/residuals_vs_fitted.png';
import ResidualHistImg from '../assets/residual_hist_log.png';
import QQPlotImg from '../assets/qq_plot.png';

const MarketCapProject = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-6 lg:px-20" id="market-cap-project">
      <div className="max-w-5xl mx-auto my-20">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          📊 {t('marketcap.title')}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t('marketcap.description1')} <strong>{t('marketcap.description2')}</strong>
          {t('marketcap.description3')} <strong>{t('marketcap.description4')}</strong>
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">🧰 {t('marketcap.toolsTitle')}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>{t('marketcap.tools.python')}</li>
              <li>{t('marketcap.tools.excel')}</li>
              <li>{t('marketcap.tools.sql')}</li>
              <li>{t('marketcap.tools.jupyter')}</li>
              <li>{t('marketcap.tools.react')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">📈 {t('marketcap.modelTitle')}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>{t('marketcap.model.r2')}</strong></li>
              <li>{t('marketcap.model.variables')}</li>
              <li>{t('marketcap.model.vif')}</li>
              <li>{t('marketcap.model.diagnostics')}</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-2">💼 {t('marketcap.skillsTitle')}</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>{t('marketcap.skills.cleaning')}</li>
          <li>{t('marketcap.skills.modeling')}</li>
          <li>{t('marketcap.skills.visual')}</li>
          <li>{t('marketcap.skills.communication')}</li>
        </ul>

        

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4">📌 Python Code Breakdown</h3>

        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-sm text-gray-800 dark:text-gray-200 font-mono">
          <pre>
            <code>
                {`# Load & clean financials
                df = pd.read_csv('financials.csv')
                df_clean = df[['EBITDA', 'Price/Earnings', 'Earnings/Share', 'Price/Sales', 'Market Cap']]
                df_clean[['EBITDA', 'Price/Sales', 'Earnings/Share']] = df_clean[['EBITDA', 'Price/Sales', 'Earnings/Share']].replace(0, np.nan)
                df_clean = df_clean.dropna()

                # Log-transform selected features
                df_clean['Log_MarketCap'] = np.log(df_clean['Market Cap'])
                df_clean['Log_EBITDA'] = np.log(df_clean['EBITDA'])
                df_clean['Log_PriceSales'] = np.log(df_clean['Price/Sales'])

                # Define regression variables
                X = sm.add_constant(df_clean[['Log_EBITDA', 'Log_PriceSales']])
                y = df_clean['Log_MarketCap']
                model = sm.OLS(y, X).fit(cov_type='HC3')  # robust standard errors
                `}
            </code>
          </pre>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-4 mb-4">
          This code loads S&P 500 financial data, removes invalid values (like zero EBITDA), log-transforms key variables, and fits an OLS model with heteroscedasticity-consistent (HC3) standard errors.
        </p>

        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-sm text-gray-800 dark:text-gray-200 font-mono">
          <pre>
            <code>
                {`# Diagnostic Plots
                residuals = model.resid
                fitted = model.fittedvalues

                # Residuals vs Fitted
                plt.scatter(fitted, residuals)
                plt.axhline(0, color='r', linestyle='--')
                plt.savefig("residuals_vs_fitted.png")

                # Residual Histogram
                sns.histplot(residuals, kde=True)
                plt.savefig("residual_hist_log.png")

                # Q-Q Plot
                sm.qqplot(residuals, line='45')
                plt.savefig("qq_plot.png")
                `}
            </code>
          </pre>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-4 mb-4">
          These plots help validate model assumptions: the residuals should be randomly scattered (no pattern), normally distributed, and roughly align along the 45° line in the Q-Q plot.
        </p>

        

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">📊 {t('marketcap.chartsTitle')}</h3>
        <div className="space-y-6">
          <img src={ResidualFittedImg} alt="Residuals vs Fitted" className="rounded-xl shadow" />
          <img src={ResidualHistImg} alt="Histogram of Residuals" className="rounded-xl shadow" />
          <img src={QQPlotImg} alt="Q-Q Plot" className="rounded-xl shadow" />
        </div>

        
      </div>
    </section>
  );
};

export default MarketCapProject;
