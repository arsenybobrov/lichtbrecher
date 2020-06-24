import React from 'react';

const createEnvMarkup = (
  hydratedDocumentRelations: string
) => ({ __html: ` window.DOCUMENT_RELATIONS = ${hydratedDocumentRelations};` });

const EnvScript = (
  {
    hydratedDocumentRelations,
  } : {
    hydratedDocumentRelations: string,
  }
) => (
  <script
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={
      createEnvMarkup(
        hydratedDocumentRelations
      )
    }
  />
);

export default EnvScript;
