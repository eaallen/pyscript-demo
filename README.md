# PyScript Demo Project

A simple, interactive web application that demonstrates the integration of HTML, CSS, JavaScript, and Python using PyScript.

## Features

### 🧮 Interactive Calculator
- Pure JavaScript implementation
- Supports addition, subtraction, multiplication, and division
- Real-time validation and error handling
- Keyboard shortcut: `Ctrl/Cmd + Enter` to calculate

### 🐍 Python Data Processing
- Generate random data points using Python
- Process and analyze data with statistical calculations
- Beautiful formatted output with HTML
- Demonstrates PyScript integration

### ⏰ Real-time Updates
- Live clock that updates every second
- Interactive counter with animations
- Keyboard shortcut: `Space` to increment counter

## Project Structure

```
demo/
├── index.html      # Main HTML file with PyScript integration
├── styles.css      # Modern, responsive CSS styling
├── script.js       # JavaScript functionality and interactions
└── README.md       # This file
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

- **HTML5**: Semantic structure and PyScript integration
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **PyScript**: Python execution in the browser
- **Python**: Data processing and analysis

## PyScript Integration

The project demonstrates several PyScript concepts:

1. **Basic Setup**: Loading PyScript CSS and JavaScript
2. **Python Code**: Embedded Python in `<py-script>` tags
3. **Function Exposure**: Making Python functions available to JavaScript
4. **Data Processing**: Using Python for complex calculations
5. **Error Handling**: Graceful handling of PyScript loading

## Key Features Explained

### Calculator (JavaScript)
- Pure client-side calculation
- Input validation and error handling
- Responsive design with hover effects

### Data Processing (Python + JavaScript)
- Python generates random data points
- Statistical analysis (sum, average, min, max)
- Category grouping and counting
- Formatted HTML output

### Real-time Features
- Clock updates every second
- Counter with visual feedback
- Keyboard shortcuts for better UX

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **PyScript Requirements**: Internet connection for initial loading
- **JavaScript**: ES6+ features used

## Development Notes

- **Simplicity First**: No complex build tools or dependencies
- **Programmer Ergonomics**: Clean, readable code with helpful comments
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful fallbacks and user-friendly error messages

## Troubleshooting

### PyScript Not Loading
- Check internet connection (required for initial PyScript download)
- Ensure you're using a modern browser
- Check browser console for error messages

### Functions Not Available
- Wait a few seconds for PyScript to initialize
- Check that Python functions are properly exposed to JavaScript
- Look for console errors

### Styling Issues
- Ensure `styles.css` is in the same directory as `index.html`
- Check browser console for CSS loading errors

## Customization

Feel free to modify this project:

- **Add More Python Functions**: Extend the `<py-script>` section
- **Modify Styling**: Update `styles.css` for different themes
- **Add Features**: Extend `script.js` with new functionality
- **Change Data**: Modify the data generation in Python

## License

This is a demo project. Feel free to use and modify as needed.

---

**Enjoy exploring the power of PyScript! 🚀** 