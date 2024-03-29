export const GA_MEASUREMENT_ID = 'G-S6CHY31B2Z';

export const pageview = (url) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
    window.widgetTracker("send", "pageview", {'campaignSource': 'RushHome'});
};

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};