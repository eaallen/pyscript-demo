# Python Code Analysis Tool

An interactive web application that allows you to write and analyze Python code directly in the browser using PyScript. This tool provides real-time code analysis capabilities including AST (Abstract Syntax Tree) parsing and code structure examination.

## Features

### 🐍 Interactive Python Editor
- **Ace Editor Integration**: Full-featured code editor with syntax highlighting
- **Python Execution**: Run Python code directly in the browser using PyScript
- **Real-time Analysis**: Analyze code structure and find specific elements

### 🔍 Code Analysis Capabilities
- **AST Parsing**: Convert Python code to Abstract Syntax Tree for analysis
- **Assignment Detection**: Find and analyze variable assignments in code
- **RedBaron Integration**: Advanced Python code parsing and manipulation
- **Variable Tracking**: Identify variables defined in the setup portion of code

### 🎯 Current Functionality
- **Code Execution**: Write and run Python code in the browser
- **Assignment Analysis**: Detect variable assignments using RedBaron
- **AST Visualization**: Convert code to JSON format for JavaScript processing
- **Variable Validation**: Check if specific variables exist in code structure

## Project Structure

```
demo/
├── index.html          # Main HTML file with PyScript and Ace editor
├── styles.css          # Modern, responsive CSS styling
├── script.js           # JavaScript for editor initialization and AST processing
├── py/
│   └── main.py         # Python backend with code analysis functions
├── pyscript.toml       # PyScript configuration and dependencies
└── README.md           # This file
```

## How to Run

1. **Simple Method**: Open `index.html` in a modern web browser
   - Double-click the file or drag it into your browser
   - Note: Some features may require a local server due to CORS policies

2. **Recommended Method**: Use a local server
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP (if you have it installed)
   php -S localhost:8000
   ```

3. **Open in Browser**: Navigate to `http://localhost:8000`

## Technology Stack

- **HTML5**: Semantic structure with PyScript integration
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Editor initialization and AST processing
- **PyScript**: Python execution in the browser
- **Ace Editor**: Professional code editor with syntax highlighting
- **RedBaron**: Advanced Python code parsing library
- **ast2json**: AST to JSON conversion for JavaScript processing

## Key Features Explained

### Python Editor
- **Ace Editor**: Professional code editor with Python syntax highlighting
- **Auto-completion**: Intelligent code completion and snippets
- **Theme Support**: Dark theme (Monokai) for better coding experience
- **Real-time Execution**: Run code immediately with PyScript

### Code Analysis
- **AST Generation**: Convert Python code to Abstract Syntax Tree
- **Assignment Detection**: Find all variable assignments in code
- **Variable Tracking**: Monitor specific variables in code structure
- **JSON Export**: Convert AST to JSON for JavaScript processing

### PyScript Integration
- **Python Execution**: Run Python code directly in the browser
- **Library Support**: Uses `ast2json` and `redbaron` packages
- **Function Exposure**: Make Python functions available to JavaScript
- **Error Handling**: Graceful handling of PyScript loading and execution

## Current Functionality

### Editor 1: Python Execution
- Write and run Python code
- See output in the PyScript terminal
- Basic code execution and testing

### Editor 2: Code Analysis
- Analyze Python code structure
- Find variable assignments using RedBaron
- AST parsing and JSON conversion
- Variable existence validation

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **PyScript Requirements**: Internet connection for initial loading
- **JavaScript**: ES6+ features used
- **Ace Editor**: Full browser support with syntax highlighting

## Development Notes

- **Simplicity First**: No complex build tools or dependencies
- **Programmer Ergonomics**: Clean, readable code with helpful comments
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful fallbacks and user-friendly error messages

## Dependencies

### Python Packages (via PyScript)
- `ast2json`: Convert Python AST to JSON format
- `redbaron`: Advanced Python code parsing and manipulation

### JavaScript Libraries
- **Ace Editor**: Professional code editor
- **PyScript**: Python execution in browser

## Troubleshooting

### PyScript Not Loading
- Check internet connection (required for initial PyScript download)
- Ensure you're using a modern browser
- Check browser console for error messages

### Editor Not Working
- Ensure Ace Editor CDN is accessible
- Check browser console for JavaScript errors
- Verify PyScript initialization is complete

### Code Analysis Issues
- Check that Python code is valid syntax
- Ensure RedBaron can parse the code structure
- Look for console errors in browser developer tools

## Future Enhancements

This project provides a foundation for:
- **Advanced Code Analysis**: More sophisticated AST processing
- **Code Visualization**: Visual representation of code structure
- **Static Analysis**: Detect potential issues in Python code
- **Code Metrics**: Calculate complexity, maintainability scores
- **Refactoring Tools**: Suggest code improvements

## Customization

Feel free to modify this project:

- **Add More Analysis**: Extend the Python analysis functions
- **Modify Styling**: Update `styles.css` for different themes
- **Add Features**: Extend `script.js` with new functionality
- **Change Editor**: Modify Ace Editor configuration
- **Add Libraries**: Include more Python packages in `pyscript.toml`

## License

This is a demo project. Feel free to use and modify as needed.

---

**Enjoy exploring Python code analysis in the browser! 🚀** 