import { parse } from 'csv-parse/sync'
import { CardForm } from '~types';
import { drawForExport } from '~components/organisms/canvas/Draw';

// Helper function shamelessly stolen from Ben Nadel's blog post below 'til this gets migrated to back-end:
// https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
export const parseArrayFromCsv = (strData: string) => {
	const strDelimiter = ",";
  const objPattern = new RegExp((
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
	"gi"
	);

  let arrData: string[][] = [[]];
	let arrMatches = null;

	while (arrMatches = objPattern.exec( strData )){
		let strMatchedDelimiter = arrMatches[1];
		if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)){
			arrData.push([]);
		}

    let strMatchedValue;
		if (arrMatches[2]){
			strMatchedValue = arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"");
		} else {
			strMatchedValue = arrMatches[3];
		}

    arrData[arrData.length - 1].push(strMatchedValue!);
	}

	return( arrData );
}

interface DownloadLinksReturn {
	canvas: HTMLCanvasElement;
	dataUrl: string;
	link: HTMLAnchorElement;
	cleanup: () => void;
	download: () => void;
}

export const generateDownloadLink = (card: CardForm, name?: string): DownloadLinksReturn  => {
	const exportCanvas = document.createElement('canvas');
	const ctx = exportCanvas.getContext('2d') as CanvasRenderingContext2D; 
	ctx.canvas.width = card.width;
	ctx.canvas.height = card.height; 
	drawForExport(card, ctx);
	
	const dataUrl = exportCanvas.toDataURL('image/png');
	const link: HTMLAnchorElement = document.createElement('a');
	link.download = `${name || card.templateName}.png`;
	link.href = dataUrl;

	const cleanup = () => {
		link.remove();
		exportCanvas.remove();
	}

	const download = () => {
		link.click();
		cleanup();
	}

	return { canvas: exportCanvas, dataUrl, link, cleanup, download };
}

export const blobify = (canvas: HTMLCanvasElement): Promise<Blob> => {
	return new Promise((resolve) => canvas.toBlob((blob) => { if (blob) resolve(blob) }))
}