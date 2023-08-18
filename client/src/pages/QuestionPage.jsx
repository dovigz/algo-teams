import { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useLazyQuery } from "@apollo/client";
import { VIEW_QUESTION } from "../graphql/queries";
import { useStateContext } from "../context/state";
import { useAuthContext } from "../context/auth";
import QuesPageContent from "../components/QuesPageContent";
import RightSidePanel from "../components/RightSidePanel";
import AuthFormModal from "../components/AuthFormModal";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatDateAgo, getErrorMsg } from "../utils/helperFuncs";
import { useHistory } from "react-router-dom";

import {
  Typography,
  Button,
  Divider,
  Grid,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { useQuesPageStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";

const QuestionPage = () => {
  const { clearEdit, notify } = useStateContext();
  const history = useHistory();
  const { user } = useAuthContext();
  const { quesId } = useParams();
  const [question, setQuestion] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const classes = useQuesPageStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [fetchQuestion, { data, loading }] = useLazyQuery(VIEW_QUESTION, {
    onError: (err) => {
      notify(getErrorMsg(err), "error");
      const errorMessage = getErrorMsg(err);
      if (errorMessage === "Malformatted ID.") {
        history.push("/");
      }
    },
  });

  useEffect(() => {
    const questionIdSchema = {
      "contains-duplicate": "64dd3e88da095c74a41997ac",
      "valid-anagram": "64dd3ff0da095c74a41997d9",
      "two-sum": "64dd4025da095c74a41997e5",
      "group-anagrams": "64dd4084da095c74a41997f1",
      "top-k-frequent-elements": "64dd40e6da095c74a4199804",
      "product-of-array-except-self": "64dd423cda095c74a4199825",
      "valid-sudoku": "64de1a1347d5248a450168f3",
      "longest-consecutive-sequence": "64df7e03859adf24d87260c9",
    };

    const lookupId = questionIdSchema[quesId] || quesId;

    fetchQuestion({ variables: { quesId: lookupId } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quesId]);

  useEffect(() => {
    if (data) {
      setQuestion(data.viewQuestion);
      setHasAnswered(
        data.viewQuestion.answers.some((ans) => ans.author.id === user?.id) ||
          false
      );
    }
  }, [data]);

  if (loading || !question) {
    return (
      <div style={{ minWidth: "100%", marginTop: "20%" }}>
        <LoadingSpinner size={80} />
      </div>
    );
  }

  const { title, views, createdAt, updatedAt } = question;

  return hasAnswered || user === null ? (
    <Container disableGutters>
      <div className={classes.root}>
        <div className={classes.topBar}>
          <div className={classes.titleWrapper}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              color="secondary"
              style={{ wordWrap: "anywhere" }}
            >
              {title}
            </Typography>
          </div>
          <div className={classes.quesInfo}>
            <Typography variant="caption" style={{ marginRight: 10 }}>
              <strong>{formatDateAgo(createdAt)} ago</strong>
            </Typography>
            {createdAt !== updatedAt && (
              <Typography variant="caption" style={{ marginRight: 10 }}>
                Edited <strong>{formatDateAgo(updatedAt)} ago</strong>
              </Typography>
            )}
            <Typography variant="caption">
              Viewed <strong>{views} times</strong>
            </Typography>
          </div>
        </div>
        <Divider />
        <QuesPageContent
          question={question}
          hasAnswered={hasAnswered}
          setHasAnswered={setHasAnswered}
        />
      </div>
    </Container>
  ) : (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <div className={classes.titleWrapper}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            color="secondary"
            style={{ wordWrap: "anywhere" }}
          >
            {title}
          </Typography>
        </div>
        <div className={classes.quesInfo}>
          <Typography variant="caption" style={{ marginRight: 10 }}>
            Asked <strong>{formatDateAgo(createdAt)} ago</strong>
          </Typography>
          {createdAt !== updatedAt && (
            <Typography variant="caption" style={{ marginRight: 10 }}>
              Edited <strong>{formatDateAgo(updatedAt)} ago</strong>
            </Typography>
          )}
          <Typography variant="caption">
            Viewed <strong>{views} times</strong>
          </Typography>
        </div>
      </div>
      <Divider />
      <QuesPageContent question={question} />
    </div>
  );
};

export default QuestionPage;
