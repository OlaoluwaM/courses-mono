function merge(...meetings) {
  const endTime = Math.max(...meetings.map(({ endTime }) => endTime));
  return { startTime: meetings[0].startTime, endTime };
}

function mergeRanges(meetings) {
  // Merge meetings ranges
  // Create a utility for merging a meeting entry and for summing up meeting times
  // If meetings is 0 return an empty array
  // Arrange meetings by start time
  // Use the window sliding technique to iterate through sorted meetings and merge
  const mergedMeetingsArr = [];
  if (meetings.length === 0) return mergedMeetingsArr;

  const sortedMeetingsArray = meetings.sort(({ startTime: a }, { startTime: b }) => a - b);
  mergedMeetingsArr.push(sortedMeetingsArray[0]);

  for (let i = 1; i < sortedMeetingsArray.length; i++) {
    debugger;
    const currMeeting = mergedMeetingsArr[mergedMeetingsArr.length - 1];
    const nextMeeting = sortedMeetingsArray[i];

    if (nextMeeting?.startTime > currMeeting?.endTime) {
      mergedMeetingsArr.push(nextMeeting);
      continue;
    }

    mergedMeetingsArr.pop();
    mergedMeetingsArr.push(merge(currMeeting, nextMeeting));
  }

  return mergedMeetingsArr;
}

console.log(
  mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
  ])
);

Array.prototype.rev
