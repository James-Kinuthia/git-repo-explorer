export const formatDate = (dateString, options = {}) => {
    new Date(dateString).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', ...options});
};

export const formatNumber = (num) => num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num.toString();