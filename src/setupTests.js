// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
import { HtmlElementTypeError, checkHtmlElement, getMessage } from '@testing-library/jest-dom/dist/utils';


function toBeOpenedInNewWindow(htmlElement) {
    checkHtmlElement(htmlElement);
    const window = htmlElement.ownerDocument.defaultView;
    if (htmlElement instanceof window.HTMLAnchorElement) {
        const hasTargetAttribute = htmlElement.hasAttribute('target');
        const hasRelAttribute = htmlElement.hasAttribute('rel');
        const receivedTargetValue = htmlElement.getAttribute('target');
        const receivedRelValue = htmlElement.getAttribute('rel');
        return {
            pass: (
                (hasTargetAttribute && this.equals(receivedTargetValue, '_blank')) && 
                (hasRelAttribute && this.equals(receivedRelValue, 'noopener noreferrer'))
            ),
            message: () => {
                const matcherTemplate = `${this.isNot ? '.not' : ''}.toOpenInNewWindow`;
                const generateTemplate = (attribute, value) => (
                    value === undefined ? attribute : `${attribute}=${this.utils.stringify(value)}`
                );
                return getMessage(
                    this,
                    this.utils.matcherHint(matcherTemplate, 'element', ''),
                    `Expected the element ${this.isNot ? 'not to' : 'to'} open in new window`,
                    (
                        `${generateTemplate('target', '_blank')}, ` +
                        `${generateTemplate('rel', 'noopener noreferrer')}`
                    ),
                    'Received',
                    (
                        `${hasTargetAttribute ? generateTemplate('target', receivedTargetValue) : null}` +
                        `, ${hasRelAttribute ? generateTemplate('rel', receivedRelValue) : null}`
                    )
                );
            }
        };
    } else {
        throw new HtmlElementTypeError(htmlElement, toBeOpenedInNewWindow, this);
    }
}


expect.extend({ toBeOpenedInNewWindow });
