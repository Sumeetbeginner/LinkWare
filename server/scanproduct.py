from flask import Flask, jsonify, request
import cv2
from pyzbar.pyzbar import decode
from datetime import datetime

def scan_qr_code():
    cap = cv2.VideoCapture(0)
    qr_code_data = None
    
    capture_duration = 5  
    start_time = datetime.now()
    while (datetime.now() - start_time).total_seconds() < capture_duration:
        ret, frame = cap.read()
        
        if not ret:
            print("Failed to capture frame. Exiting...")
            break
        
        decoded_objects = decode(frame)
        if decoded_objects:
            qr_code_data = decoded_objects[0].data.decode('utf-8')
            break
        
        cv2.imshow('QR Code Scanner', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()
    
    return qr_code_data
