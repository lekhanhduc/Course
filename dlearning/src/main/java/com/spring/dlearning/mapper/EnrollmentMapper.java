package com.spring.dlearning.mapper;

import com.spring.dlearning.dto.request.BuyCourseRequest;
import com.spring.dlearning.dto.response.BuyCourseResponse;
import com.spring.dlearning.entity.Enrollment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EnrollmentMapper {

    @Mapping(source = "courseId", target = "course.id")
    Enrollment toEnrollment(BuyCourseRequest request);

    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "courseId", source ="course.id")
    @Mapping(target = "title", source = "course.title")
    @Mapping(target = "price", source = "course.price")
    @Mapping(target = "author", source = "course.author.name")
    @Mapping(target = "createAt", source = "course.createdAt")
    BuyCourseResponse toBuyCourseResponse(Enrollment enrollment);

}
