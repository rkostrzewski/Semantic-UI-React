import * as React from 'react';
import { ReactMouseEvents } from '../..';

// Accordion
// ----------------------------------
interface AccordionProps {

  /** Index of the currently active panel. */
  activeIndex?: number | number[];

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number | number[];

  /** Only allow one panel open at a time */
  exclusive?: boolean;

  /** Format to take up the width of it's container. */
  fluid?: boolean;

  /** Format for dark backgrounds. */
  inverted?: string;

  /** Called with (event, index) when a panel title is clicked. */
  onTitleClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Create simple accordion panels from an array of { text: <custom>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Object can opitonally define a `key` key used for title and content nodes' keys.
   * Mutually exclusive with children.
   * TODO: AccordionPanel should be a sub-component
   */
  panels?: any;

  /** Adds some basic styling to accordion panels. */
  styled?: boolean;
}

interface AccordionClass extends React.ComponentClass<AccordionProps> {
  Panel: typeof AccordionPanel;
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

export const Accordion: AccordionClass;

export const AccordionPanel: React.ComponentClass<AccordionPanelProps>;

interface AccordionPanelProps {
  /** Primary content. */
  children?: React.ReactNode;
}

interface AccordionContentProps {
  /** Whether or not the content is visible. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionContent: React.ComponentClass<AccordionContentProps>;

interface AccordionTitleProps extends ReactMouseEvents<HTMLElement> {

  /** Whether or not the title is in the open state. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionTitle: React.ComponentClass<AccordionTitleProps>;
