import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const data = [
    {
      article: "nano1",
      volume: "volume-3",
      issue: 1,
      year: 2016,
    },
    {
      article: "mech1",
      volume: "volume-4",
      issue: 1,
      year: 2017,
    },
    {
      article: "mech4",
      volume: "volume-4",
      issue: 4,
      year: 2017,
    },
    {
      article: "mech44",
      volume: "volume-4",
      issue: 4,
      year: 2017,
    },
    {
      article: "mech10",
      volume: "volume-4",
      issue: 10,
      year: 2017,
    },
    {
      article: "aerospace22",
      volume: "volume-1",
      issue: 2,
      year: 2014,
    },
    {
      article: "aerospace1",
      volume: "volume-1",
      issue: 1,
      year: 2014,
    },
    {
      article: "aerospace2",
      volume: "volume-1",
      issue: 2,
      year: 2014,
    },

    {
      article: "bio1",
      volume: "volume-2",
      issue: 1,
      year: 2015,
    },
    {
      article: "bio5",
      volume: "volume-2",
      issue: 5,
      year: 2015,
    },
    {
      article: "bio2",
      volume: "volume-2",
      issue: 2,
      year: 2015,
    },
    {
      article: "bio22",
      volume: "volume-2",
      issue: 2,
      year: 2015,
    },
    {
      article: "nano3",
      volume: "volume-3",
      issue: 3,
      year: 2016,
    },
    {
      article: "nano5",
      volume: "volume-3",
      issue: 5,
      year: 2016,
    },
    {
      article: "nano5",
      volume: "volume-6",
      issue: 5,
      year: 2019,
    },
  ];

  const groupByYear = data.reduce((acc, article) => {
    (acc[article.year] = acc[article.year] || []).push(article);
    return acc;
  }, {});
  console.log(groupByYear);
  
  return (
    <div className="App">
    // sorted our data here on line 109
      {Object.keys(groupByYear)
        .sort(function (a, b) {
          return b - a;
        })
        .map((yearKey) => {
          const yearData = groupByYear[yearKey];
          const groupByIssue = yearData.reduce((acc, article) => {
            (acc[article.issue] = acc[article.issue] || []).push(article);
            return acc;
          }, {});
          return (
            <div key={yearKey}>
              <p>Year: {yearKey}</p>
              <div className="year-body">
                {Object.keys(groupByIssue).map((issueKey) => {
                  const issueData = groupByIssue[issueKey];

                  return (
                    <div key={issueKey} className="year-body">
                      <Link
                        to={`tabel/${yearKey}/${issueKey}`}
                        className="content"
                      >
                        {issueData[0].volume}/issue-{issueKey}
                      </Link>
                      {issueData.map((data, index) => {
                        return (
                          <span key={index}></span> // write your logic here in this return
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
