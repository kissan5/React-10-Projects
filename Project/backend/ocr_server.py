from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image, ImageEnhance
import io
import pytesseract
import base64
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Helper function to preprocess images
def preprocess_image(base64_image):
    # Decode the base64 image
    image_data = base64.b64decode(base64_image)
    image = Image.open(io.BytesIO(image_data))

    # Enhance the image (grayscale, contrast, brightness)
    image = image.convert('L')  # Convert to grayscale
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(2)  # Increase contrast
    enhancer = ImageEnhance.Brightness(image)
    image = enhancer.enhance(1.2)  # Slightly increase brightness
    image = image.resize((640, 480))  # Resize if necessary

    return image

# Route for processing images
@app.route('/process-image', methods=['POST'])
def process_image():
    data = request.get_json()
    if 'image' not in data:
        return jsonify({"error": "No image provided"}), 400

    base64_image = data['image']

    try:
        # Preprocess the image
        processed_image = preprocess_image(base64_image)

        # Use Tesseract to recognize text in the processed image
        detected_text = pytesseract.image_to_string(processed_image, lang='eng')
        capture_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        return jsonify({"detected_text": detected_text.strip(), "capture_time": capture_time})
    except Exception as e:
        print("Error during image processing:", e)
        return jsonify({"error": "Failed to process image"}), 500

if __name__ == '__main__':
    app.run(port=5001)
