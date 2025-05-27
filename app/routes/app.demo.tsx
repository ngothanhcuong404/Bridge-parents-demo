import { useAppBridge } from "@shopify/app-bridge-react";
import { Button, InlineStack, Layout, Page } from "@shopify/polaris";

export default function DemoPage() {
    const shopify = useAppBridge();
    const handleSave = () => {
        console.log('Saving');
        shopify.saveBar.hide('my-save-bar');
    };

    const handleDiscard = () => {
        console.log('Discarding');
        shopify.saveBar.hide('my-save-bar');
    };
    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <ui-title-bar title="Demo Page">
                        <button variant="primary">Primary action</button>
                        <button>Secondary action</button>
                    </ui-title-bar>
                    <ui-modal id="my-modal">
                        <p>Message</p>
                        <ui-title-bar title="Title">
                            <button variant="primary">Label</button>
                            <button onClick={() => shopify.modal.hide('my-modal')}>Label</button>
                        </ui-title-bar>
                    </ui-modal>
                    <InlineStack gap='1000'>
                        <Button variant="primary" onClick={() => shopify.modal.show('my-modal')}>Open Modal</Button>
                        <Button onClick={() => shopify.saveBar.show('my-save-bar')}>
                            Show Save Bar
                        </Button>
                    </InlineStack>
                    <ui-save-bar id="my-save-bar">
                        <button variant="primary" id="save-button" onClick={handleSave}></button>
                        <button id="discard-button" onClick={handleDiscard}></button>
                    </ui-save-bar>
                </Layout.Section>
            </Layout>
        </Page>
    );
};
