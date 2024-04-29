# SVG Logo Maker

## Description
SVG Logo Maker is a simple command-line application that allows users to create SVG logos with customizable text, colors, and shapes (circle, triangle, square). This tool is designed to help developers quickly generate logos for their projects without needing graphic design software.

## Features
- Create SVG logos with up to three characters of text.
- Choose the color of the text using color keywords or hexadecimal values.
- Select from three shapes: circle, triangle, or square.
- Set the color of the chosen shape using color keywords or hexadecimal values.
- Automatically save the generated logo as an SVG file.

## Installation
To set up the SVG Logo Maker on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/fgsdeve/SVG-Logo-Maker.git

2. Navigate to the project directory:
   cd SVG-Logo-Maker

3. Install the required dependencies:
   npm install

## Usage
To run the SVG Logo Maker, execute the following command in the root of the project directory:

node app.js
Follow the on-screen prompts to specify the text, text color, shape, and shape color for your logo.

## Testing
To run the tests to ensure the application functions as expected:
npm test

## Contributing
Contributions to the SVG Logo Maker are welcome! If you have suggestions to improve the application, please fork the repository and submit a pull request. 

## Dependencies

The following Node.js packages are crucial to the functionality of SVG Logo Maker:

- **[readline-sync](https://www.npmjs.com/package/readline-sync)**: Enables synchronous user input for Node.js command-line applications. It's instrumental in facilitating the interactive prompts that guide users through creating their SVG logos.

- **[Jest](https://jestjs.io/)**: Provides a comprehensive testing suite to ensure the reliability and performance of the SVG Logo Maker. It allows for the effective testing of the application's functionality before deployment.

## Acknowledgments

### Educational Resources

- **CSS-Tricks** for their excellent tutorials on SVG graphics, which have been instrumental in helping me understand and implement advanced SVG features.
- **Stack Overflow** community for providing solutions to numerous issues encountered during development. Their extensive community-driven knowledge base is invaluable for troubleshooting and learning.

### Tooling and Libraries

Special thanks to the developers and maintainers of the following Node.js packages:

- **[readline-sync](https://www.npmjs.com/package/readline-sync)**: This package has enabled my application to interact smoothly with users through the command line, making it possible to gather user inputs synchronously.
- **[Jest](https://jestjs.io/)**: Jest has been crucial for running  unit tests, ensuring that each component of SVG Logo Maker functions correctly before release. It has significantly streamlined our testing process.


I also appreciate all the developers and authors of the articles, posts, and tutorials that have inspired and guided the development of SVG Logo Maker. Your shared knowledge and resources have been invaluable.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
