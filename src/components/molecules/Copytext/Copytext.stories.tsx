import React from 'react';
import Copytext from './Copytext';

export default {
  title: 'Molecules/Copytext',
  component: Copytext,
};

export const Richtext = () => (
  <Copytext
    richtext={[
      {
        type: 'paragraph',
        text:
          'Geschmacksexplosion statt lauwarmem Aufguss: Melitta Single Portions läutet mit der Marke Avoury ein neues Tee-Zeitalter ein. Zum Markenlaunch hat das Unternehmen der Melitta Group die Teemaschine Avoury One und 40 Bio-Teesorten auf den Markt gebracht.',
        spans: [],
      },
    ]}
  />
);

export const TextString = () => (
  <Copytext
    textstring="Geschmacksexplosion statt lauwarmem Aufguss: Melitta Single Portions läutet mit der Marke Avoury ein neues Tee-Zeitalter ein. Zum Markenlaunch hat das Unternehmen der Melitta Group die Teemaschine Avoury One und 40 Bio-Teesorten auf den Markt gebracht."
  />
);
