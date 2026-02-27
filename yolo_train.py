from ultralytics import YOLO
import torch
from multiprocessing import freeze_support

def main():
    #model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training) base model
    model = YOLO('yolov8m.pt')  # load a pretrained model (recommended for training) base model
    if device := torch.device('cuda' if torch.cuda.is_available() else 'cpu'):
        print(f"Using device: {device}")
    model.train(data='safehat.yaml', 
                epochs=100, 
                device = device,
                workers=8,
                batch=16,
                )  # train the model for 100 epochs on the safehat dataset

    model.val()  # evaluate model performance on the validation set

if __name__ == "__main__":
    freeze_support()  # for Windows support
    main()