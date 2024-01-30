import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Accordion type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Accordion type='single' ref={ref}>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should display the correct number of items', () => {
    const wrapper = render(
      <Accordion type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(wrapper.getAllByRole('button')).toHaveLength(2);
  });

  it('should be opened when defaultExpandedKeys is set', () => {
    const wrapper = render(
      <Accordion type='single' defaultValue='item-1'>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const base = wrapper.getByTestId('item-1');
    const button = base.querySelector('button') as HTMLElement;
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should expand the accordion item when clicked', () => {
    const wrapper = render(
      <Accordion type='single'>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const base = wrapper.getByTestId('item-1');
    const button = base.querySelector('button') as HTMLElement;
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('arrow up & down moves focus to next/previous accordion item', () => {
    const wrapper = render(
      <Accordion type='single'>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' data-testid='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const first = wrapper.getByTestId('item-1');
    const firstButton = first.querySelector('button') as HTMLElement;
    const second = wrapper.getByTestId('item-2');
    const secondButton = second.querySelector('button') as HTMLElement;
    fireEvent.focus(firstButton);
    fireEvent.keyDown(firstButton, { key: 'ArrowDown' });
    expect(secondButton).toHaveFocus();
    fireEvent.keyDown(secondButton, { key: 'ArrowUp' });
  });

  it('should not be collapsible when collapsible is false', () => {
    const wrapper = render(
      <Accordion type='single'>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' data-testid='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const base = wrapper.getByTestId('item-1');
    const button = base.querySelector('button') as HTMLElement;
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should be collapsible when collapsible is true', () => {
    const wrapper = render(
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' data-testid='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const base = wrapper.getByTestId('item-1');
    const button = base.querySelector('button') as HTMLElement;
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should expand mutiple accordian when type multiple', () => {
    const wrapper = render(
      <Accordion type='multiple'>
        <AccordionItem value='item-1' data-testid='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' data-testid='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const first = wrapper.getByTestId('item-1');
    const firstButton = first.querySelector('button') as HTMLElement;
    const second = wrapper.getByTestId('item-2');
    const secondButton = second.querySelector('button') as HTMLElement;
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
  });
});
