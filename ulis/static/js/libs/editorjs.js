const cPreview = (function (module) {
  /**
   * Shows JSON in pretty preview
   * @param {object} output - what to show
   * @param {Element} holder - where to show
   */
  module.show = function (output, holder) {
    /** Make JSON pretty */
    output = JSON.stringify(output, null, 4);
    /** Encode HTML entities */
    output = encodeHTMLEntities(output);
    console.log(output);
    /** Stylize! */
    //   output = stylize( output );
    //   holder.innerHTML = output;
  };

  /**
   * Converts '>', '<', '&' symbols to entities
   */
  function encodeHTMLEntities(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /**
   * Some styling magic
   */
  function stylize(string) {
    /** Stylize JSON keys */
    string = string.replace(/"(\w+)"\s?:/g, '"<span class=sc_key>$1</span>" :');
    /** Stylize tool names */
    string = string.replace(/"(paragraph|quote|list|header|link|code|image|delimiter|raw|checklist|table|embed|warning)"/g, '"<span class=sc_toolname>$1</span>"');
    /** Stylize HTML tags */
    string = string.replace(/(&lt;[\/a-z]+(&gt;)?)/gi, '<span class=sc_tag>$1</span>');
    /** Stylize strings */
    string = string.replace(/"([^"]+)"/gi, '"<span class=sc_attr>$1</span>"');
    /** Boolean/Null */
    string = string.replace(/\b(true|false|null)\b/gi, '<span class=sc_bool>$1</span>');
    return string;
  }

  return module;
})({});

(async () => {
  const currentlang = getLang();
  const editorAPI = `${window.location.origin}/api/editor`;
  window.CustomEditorJS_Config = {
    // Enable/Disable the read only mode
    readOnly: false,
    placeholder: 'Let`s write an awesome story!',
    inlineToolbar: ['link', 'marker', 'bold', 'italic'],
    inlineToolbar: true,

    tools: {
      header: {
        class: Header,
        inlineToolbar: ['marker', 'link'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },

      image: SimpleImage,

      list: {
        class: List,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L'
      },

      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },

      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: 'Quote\'s author',
        },
        shortcut: 'CMD+SHIFT+O'
      },

      warning: Warning,

      marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M'
      },

      code: {
        class: CodeTool,
        shortcut: 'CMD+SHIFT+C'
      },

      delimiter: Delimiter,

      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+C'
      },

      linkTool: {
        class: LinkTool,
        config: {
          endpoint: `${editorAPI}/fetchUrl`, // Your backend endpoint for url data fetching,
        }
      },
      textVariant: TextVariantTune,

      strikethrough: Strikethrough,
      underline: Underline,

      audioPlayer: AudioPlayer,
      embed: {
        class: Embed,
        inlineToolbar: true
      },
      imageGallery: ImageGallery,
      hyperlink: {
        class: Hyperlink,
        config: {
          shortcut: 'CMD+L',
          target: '_blank',
          rel: 'nofollow',
          availableTargets: ['_blank', '_self'],
          availableRels: ['author', 'noreferrer'],
          validate: false,
        }
      },
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T'
      },

      tooltip: {
        class: Tooltip,
        config: {
          location: 'left',
          underline: true,
          placeholder: 'Enter a tooltip',
          highlightColor: '#FFEFD5',
          backgroundColor: '#154360',
          textColor: '#FDFEFE',
        }
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      alert: {
        class: Alert,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+A',
        config: {
          defaultType: 'primary',
          messagePlaceholder: 'Enter something',
        },
      },
      nestedchecklist: editorjsNestedChecklist,
      columns: {
        class: editorjsColumns,
        config: {
          EditorJsLibrary: EditorJS, // Pass the library instance to the columns instance.
          tools: {
            header: Header,
            alert: Alert,
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            delimiter: Delimiter
          } // IMPORTANT! ref the column_tools
        }
      },
      translator: {
        class: Translate,
        config: {
          endpoint: `${editorAPI}/translate?dest=${currentlang}&text=`,
        }
      },
    },
    tunes: ['textVariant'],
  };
})();