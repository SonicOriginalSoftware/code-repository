import 'package:code_repository/shell/bar/buttons/create.dart';
import 'package:code_repository/shell/bar/buttons/home.dart';
import 'package:code_repository/shell/bar/widgets/account/name.dart';
import 'package:code_repository/shell/bar/widgets/options.dart';
import 'package:flutter/material.dart';

class Bar extends StatelessWidget implements PreferredSizeWidget {
  const Bar({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  static const actions = [
    Name(),
    Options(),
  ];

  @override
  Widget build(BuildContext context) {
    double iconThemeSize = Theme.of(context).iconTheme.size ?? 24;
    double leadingPadding = ((kToolbarHeight - iconThemeSize) / 2) + 8;

    List<Widget> leadingWidgets = [
      Home(padding: leadingPadding),
      Create(padding: leadingPadding),
    ];
    int numLeadingWidgets = leadingWidgets.length;

    double leadingWidth = leadingPadding * 2 * numLeadingWidgets +
        iconThemeSize * numLeadingWidgets;

    return AppBar(
      leadingWidth: leadingWidth,
      leading: Flex(
        direction: Axis.horizontal,
        children: leadingWidgets,
      ),
      actions: actions,
    );
  }
}
