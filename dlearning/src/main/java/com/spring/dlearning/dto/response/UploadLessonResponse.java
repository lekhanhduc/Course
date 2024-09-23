package com.spring.dlearning.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UploadLessonResponse {

    Long userId;
    Long courseId;
    String courseTitle;
    Long lessonId;
    String lessonName;
    String description;

    @Builder.Default
    Set<LessonContentDto> lessonContents = new HashSet<>();

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @FieldDefaults(level = AccessLevel.PRIVATE)
    public static class LessonContentDto{
        Long contentId;
        String contentType;   // Ví dụ: "video", "document"
        String contentUrl;
        String contentDescription;
    }
}
