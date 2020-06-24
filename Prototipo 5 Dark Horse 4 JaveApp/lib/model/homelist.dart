import 'package:javeapp/design_course/home_design_course.dart';
import 'package:flutter/widgets.dart';
import 'package:javeapp/urls/url_monitor.dart';
import 'package:javeapp/urls/url_clasesonline.dart';
import 'package:javeapp/urls/url_pausaactiva.dart';
import 'package:javeapp/design_course/course_info_screen.dart';

class HomeList {
  HomeList({
    this.navigateScreen,
    this.imagePath = '',
  });

  Widget navigateScreen;
  String imagePath;

  static List<HomeList> homeList = [
    /* HomeList(
      imagePath: 'assets/hotel/hotel_booking.png',
      navigateScreen: HotelHomeScreen(),
    ),
    HomeList(
      imagePath: 'assets/fitness_app/fitness_app.png',
      navigateScreen: FitnessAppHomeScreen(),
    ), */
    HomeList(
      imagePath: 'assets/design_course/javeapp.png',
      navigateScreen: DesignCourseHomeScreen(),
    ),
    HomeList(
      imagePath: 'assets/design_course/virtual.png',
      navigateScreen: CourseInfoScreen(),
    ),
    HomeList(
      imagePath: 'assets/design_course/monitores.png',
      navigateScreen: Monitor(),
    ),
    HomeList(
      imagePath: 'assets/design_course/clasesonline.png',
      navigateScreen: ClasesOnline(),
    ),
    HomeList(
      imagePath: 'assets/design_course/pausaactiva.png',
      navigateScreen: PausaActiva(),
    ),
  ];
}
