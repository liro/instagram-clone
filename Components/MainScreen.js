import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {Icon} from 'native-base';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import {createTabNavigator} from 'react-navigation-tabs';
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

class MainScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <AppTabNavigator/>
        );
    }
}

export default MainScreen;

const AppTabNavigator = createAppContainer(createMaterialTopTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab

    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animaitonEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: '#d1cece',
        style: {
            backgroundColor: 'white',
        },
        showIcon: true,
        showLabel: false,
        upperCaseLabel: false,
    }
}));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
