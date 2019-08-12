import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import coursesData from '../../assets/data/courses.json';
import List from '../atoms/List.js';

class Courses extends Component {

    getClassNameCourseContainer(length, index) {
        // Add 'separator' class if it's not the latest element
        return (length > index) ? 'course container separator pl-xs-0' : 'course container pl-xs-0';
    }

    renderCourses() {
        const locale = this.props.locale.substring(0,2);
        return coursesData[locale]['courses'].map((course,index) => {
            return (
                <div className={this.getClassNameCourseContainer(coursesData[locale]['courses'].length, index + 1)} key={`course-${index}`}>
                    <div className='title'>
                        <h6 className='d-inline'>{course.title} </h6> 
                        <p className='subtitle d-inline'> - {course.description} | {course.date}</p>
                        <List items={course.skills} type='bullet'/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h6 className='text-uppercase'><FormattedMessage id='work.learning.title'/></h6>
                {this.renderCourses()}
            </div>
        );
    }
}

export default Courses;
