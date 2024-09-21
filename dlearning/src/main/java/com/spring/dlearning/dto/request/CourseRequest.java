package com.spring.dlearning.dto.request;

import com.spring.dlearning.utils.CourseLevel;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CourseRequest {
    String title;
    String description;
    Integer duration;
    String language;
    CourseLevel courseLevel;
    Long price;
    String thumbnail;
    String videoUrl;

}
