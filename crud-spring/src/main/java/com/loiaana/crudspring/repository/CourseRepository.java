package com.loiaana.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loiaana.crudspring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository <Course, Long> {
    
}
