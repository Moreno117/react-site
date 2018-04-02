import _ from 'lodash';

export const htmlParsed = content =>  _.escape(content).replace(/\n/g, "<br>");