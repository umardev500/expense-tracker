import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  stepCount: number;
  chartHeight: number;
  paddingVertically: number;
  maxValue: number;
  disableLine?: boolean;
  labelSize?: number;
};

export const ChartLineLabel = ({
  stepCount,
  chartHeight,
  paddingVertically,
  maxValue,
  disableLine = false,
  labelSize = 14,
}: Props) => {
  const step = maxValue / stepCount;
  return (
    <>
      {!disableLine && (
        <View
          className="absolute inset-0 left-7"
          style={{
            height: '100%',
            justifyContent: 'space-between',
          }}>
          {/* Create horizontal lines at each step */}
          {[...Array(stepCount + 1)].map((_, index) => {
            const stepHeight = (index / stepCount) * chartHeight;
            return (
              <View
                key={index}
                style={{
                  height: 1, // Thickness of the line
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light horizontal line
                  position: 'absolute',
                  top: stepHeight + paddingVertically, // Position each line
                  left: 0,
                  right: 0,
                }}
              />
            );
          })}
        </View>
      )}

      <View className="left-0 h-full min-w-10 bg-darkbg">
        <View>
          {[...Array(stepCount + 1)].map((_, index) => {
            const stepHeight = (index / stepCount) * chartHeight;

            // Adjust the label to display the correct value
            const labelValue = Math.round(step * (stepCount - index));

            return (
              <React.Fragment key={index}>
                <Text
                  className="text-white left-0 leading-none whitespace-nowrap"
                  numberOfLines={1}
                  style={{
                    position: 'absolute',
                    fontSize: labelSize,
                    top: stepHeight - labelSize / 2, // Shift label down by half of its font size (~16px / 2)
                    right: 4, // Adjust spacing from Y-axis
                  }}>
                  ${labelValue}
                </Text>
                <Text className="opacity-0 px-0.5">${labelValue}</Text>
              </React.Fragment>
            );
          })}
        </View>
      </View>
    </>
  );
};
