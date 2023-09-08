import cv2 as cv
cap = cv.VideoCapture(0, cv.CAP_DSHOW)
cap.read()
k = cv.waitKey(0) 
