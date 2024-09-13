package com.spring.dlearning.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.spring.dlearning.utils.CourseLevel;
import com.spring.dlearning.utils.Gender;
import com.spring.dlearning.utils.RegistrationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "users")
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends AbstractEntity<Long> {

    @Column(name = "email", nullable = false, unique = true)
    @NotNull
    @Email
    String email;

    @Column(name = "password")
    String password;

    @Column(name = "otp")
    String otp;

    @Column(name = "otp_expiry_date")
    LocalDateTime otpExpiryDate;

    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "avatar")
    String avatar;

    @Column(name = "first_name", nullable = false)
    String firstName;

    @Column(name = "last_name", nullable = false)
    String lastName;

    @Column(name = "dob")
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    LocalDate dob;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(name = "courseLevel")
    CourseLevel courseLevel;

    @Column(name = "phone")
    String phone;

    @Column(name = "address")
    String address;

    @Column(name = "description")
    String description;

    @Column(name = "zipCode")
    String zipCode;

    @Column(name = "enabled")
    Boolean enabled;

    @Column(name = "expertise")
    String expertise;

    @Column(name = "yearsOfExperience")
    Double yearsOfExperience;

    @Column(name = "bio")
    String bio;

    @Column(name = "certificate")
    String certificate;

    @Column(name = "cvUrl")
    String cvUrl;

    @Column(name = "facebookLink")
    String facebookLink;

    @Column(name = "registrationStatus")
    @Enumerated(EnumType.STRING)
    RegistrationStatus registrationStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = false)
    Role role;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "comments"})
    Set<Comment> comments;

    @PrePersist
    protected void onCreate() {
        if (enabled == null) {
            enabled = Boolean.TRUE;
        }
    }
}
