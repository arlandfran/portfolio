import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/arlandfran/portfolio.git', // Update to point to your repository
		user: {
			name: 'Arland', // update to use your name
			email: 'arland.torres@outlook.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
