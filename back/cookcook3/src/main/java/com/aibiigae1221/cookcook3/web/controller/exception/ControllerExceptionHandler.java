package com.aibiigae1221.cookcook3.web.controller.exception;

import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.aibiigae1221.cookcook3.web.dto.ResponseDTO;

@RestControllerAdvice
public class ControllerExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseDTO handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		return new ResponseDTO(true, e.getBindingResult().getAllErrors().get(0).getDefaultMessage());
	}
	
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseDTO handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
		return new ResponseDTO(true, "잘못된 형식의 값이 전달되었습니다.");
	}
}
