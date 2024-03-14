interface Window {
    Calendly: {
        initBadgeWidget(options: {
            url: string;
            text: string;
            color: string;
            textColor: string;
            branding: boolean;
        }): void;
        // Add other Calendly properties or methods here if needed
    };
}
