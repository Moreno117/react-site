import _ from 'lodash';

export const htmlParsed = content =>  _.escape(content).replace(/\n/g, "<br>");

export const dateParsed = date => {
    var formateDate = new Date(Date.parse(date.toString()))
    return formateDate.toDateString();
}