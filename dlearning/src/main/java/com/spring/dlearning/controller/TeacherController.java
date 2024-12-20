package com.spring.dlearning.controller;


import com.cloudinary.Api;
import com.spring.dlearning.dto.response.ApiResponse;
import com.spring.dlearning.dto.response.InfoTeacherByCourseResponse;
import com.spring.dlearning.service.CourseService;
import com.spring.dlearning.service.TeacherService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/api/v1")
@Slf4j
public class TeacherController {

    TeacherService teacherService;

    @GetMapping("/info-teacher/{id}")
    public ApiResponse<InfoTeacherByCourseResponse> getInfoTeacherByCourse(@PathVariable long id){


        return ApiResponse.<InfoTeacherByCourseResponse>builder()
                .code(HttpStatus.OK.value())
                .message("Get information teacher succesfully")
                .result(teacherService.getInfoTeacherByCourse(id))
                .build();
    }
}
