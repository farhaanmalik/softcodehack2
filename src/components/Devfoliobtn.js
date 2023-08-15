import React from 'react';

const DevfolioApplyButton = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="apply-button"
            data-hackathon-slug="softcodehack2" // Replace with your actual slug
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
        ></div>
    );
};

export default DevfolioApplyButton;
