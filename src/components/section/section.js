import React from 'react';
import PropTypes from 'prop-types';
import s from './section.module.css'

function Section({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title_section}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
