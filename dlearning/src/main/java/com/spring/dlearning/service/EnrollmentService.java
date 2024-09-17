//package com.spring.dlearning.service;
//
//import com.spring.dlearning.dto.request.BuyCourseRequest;
//import com.spring.dlearning.dto.response.BuyCourseResponse;
//import com.spring.dlearning.entity.Course;
//import com.spring.dlearning.entity.Enrollment;
//import com.spring.dlearning.entity.User;
//import com.spring.dlearning.exception.AppException;
//import com.spring.dlearning.exception.ErrorCode;
//import com.spring.dlearning.mapper.EnrollmentMapper;
//import com.spring.dlearning.repository.EnrollmentRepository;
//import com.spring.dlearning.repository.UserRepository;
//import com.spring.dlearning.utils.SecurityUtils;
//import lombok.AccessLevel;
//import lombok.RequiredArgsConstructor;
//import lombok.experimental.FieldDefaults;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
//@Slf4j
//public class EnrollmentService {
//
//    EnrollmentRepository enrollmentRepository;
//    UserRepository userRepository;
//    EnrollmentMapper enrollmentMapper;
//
//    public boolean existsByUserAndCourse(User user, Course course) {
//        return enrollmentRepository.existsByUserAndCourse(user, course);
//    }
//
//    public BuyCourseResponse buyCourse(BuyCourseRequest request){
//
//        String email = SecurityUtils.getCurrentUserLogin()
//                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_INVALID));
//
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
//
//
//        Enrollment enrollment = enrollmentMapper.toEnrollment(request);
//
//        return null;
//    }
//
//}
