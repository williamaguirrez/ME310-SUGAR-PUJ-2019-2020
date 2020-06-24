import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:javeapp/urls/url_clasesonline.dart';

void main() {
  Widget makeTestableWidget({Widget child}) {
    return MaterialApp(
      home: child,
    );
  }

  testWidgets('home has a button', (WidgetTester tester) async {
    await tester.pumpWidget(makeTestableWidget(child: ClasesOnline()));

    final firstButtonFinder = find.text(ClasesOnline.links.first);

    expect(firstButtonFinder, findsOneWidget);
  });
}
