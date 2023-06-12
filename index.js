import cssnano from 'cssnano';

export default function cssnanoPlugin() {
	return {
		name: 'rollup-plugin-cssnano',

		async generateBundle(outputOptions, bundle) {
			const cssFiles = Object.values(bundle).filter(({type}) => type === 'asset');

			for (const file of cssFiles) {
				const result = await cssnano().process(file.source, {from: file.fileName});
				file.source = Buffer.from(result.css);
			}
		},
	};
}
