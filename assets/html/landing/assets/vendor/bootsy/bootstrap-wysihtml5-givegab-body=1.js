/**
 * Givegab Override for bootstrap-wysihtml5
 */

(function($){
  $.fn.wysihtml5.locale["en"] = {
    font_styles: {
      title: "Font style",
      normal: "Normal",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3"
    },
    emphasis: {
      bold: "B",
      italic: "I",
      underline: "U"
    },
    lists: {
      unordered: "Unordered list",
      ordered: "Ordered list",
      outdent: "Outdent",
      indent: "Indent"
    },
    link: {
      insert: "Insert link",
      cancel: "Cancel"
    },
    image: {
      insert: "Insert image",
      cancel: "Cancel"
    },
    html: {
      edit: "Edit HTML"
    },
    colours: {
      title: "Text color",
      black: "Black",
      silver: "Silver",
      gray: "Grey",
      maroon: "Maroon",
      red: "Red",
      purple: "Purple",
      green: "Green",
      olive: "Olive",
      navy: "Navy",
      blue: "Blue",
      orange: "Orange"
    }
  };
}(jQuery));
