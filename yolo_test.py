from ultralytics import YOLO
import torch

model = YOLO('D:\\project\\yolov8\\runs\\detect\\train6\\weights\\best.pt')  # load a myself trained model
#model = YOLO('D:\\project\\yolov8\\runs\\detect\\train5\\weights\\best.pt')  # load a myself trained model
if device := torch.device('cuda' if torch.cuda.is_available() else 'cpu'):
    print(f"Using device: {device}")
model.predict(source='D:\\project\\yolov8\\css-data\\test\\images\\006463_jpg.rf.02f19082420ecc5537b9d59abbe6050c.jpg', save=True)  # predict on test images
model.predict(source='D:\\project\\yolov8\\css-data\\test\\images\\22.mp4', save=True)  # predict on test images

model.predict(source='D:\\project\\yolov8\\css-data\\test\\images\\youtube-631_jpg.rf.7c6ecf859c1b0a659f8ea057ad27aebd.jpg', save=True, classes = [0,2])  # predict on test images
model.predict(source='D:\\project\\yolov8\\css-data\\test\\images\\IMG_0871_mp4-23_jpg.rf.03f872b1ed87ad7fadc85e09475ad37a.jpg', save=True, classes = [0,2])  # predict on test images